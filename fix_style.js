
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'style.css');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix specific known error pattern "}/ *" -> "} \n/*"
    // Also generally ensure there's a newline before the new section
    const targetHeader = '/* ─── Timer Section';

    if (content.includes(targetHeader)) {
        console.log('Found Timer Section header.');

        // Check if there is a syntax error before it
        // The error reported was at line 1287, likely "} / *" or similar

        // We will replace "}<anything>/* ─── Timer Section" with "}\n\n/* ─── Timer Section"
        // Use regex to find the junction
        const regex = /\}[ \t\r]*\/?\*+[ \t\r]*─── Timer Section/g;

        // Actually, let's just replace the exact header with a newline prefixed version
        // But we need to make sure we don't double add if it's already okay? 
        // Safest is to find the previous closing brace.

        // Let's search for the specific error reported: "}/ *" which likely means "default" closing brace and then the comment start.
        // But since I appended, it might be just "}*/" if the comment started with "/"

        // Simpler approach: Split the file at the header, ensure clean join.
        const parts = content.split('/* ─── Timer Section');

        if (parts.length > 1) {
            const prefix = parts[0].trimEnd();
            // Verify prefix ends with }
            if (prefix.endsWith('}')) {
                // Great.
            } else if (prefix.endsWith('}/')) {
                // This matches the "}/ *" error hypothesis (comment start / was consumed?)
                // Fix it
                parts[0] = prefix.slice(0, -2) + '}';
            }

            const newContent = parts[0] + '\n\n/* ─── Timer Section' + parts.slice(1).join('/* ─── Timer Section');
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Successfully fixed style.css structure.');
        } else {
            console.log('Could not split by Timer Section header. Checking for damaged header.');
            // Maybe the header itself is damaged like "/ * ─── Timer Section"
            // Let's blindly append if we can't find it? No, that duplicates.

            // Let's try to find "Timer Section" and see what's before it.
            const timerIdx = content.indexOf('Timer Section');
            if (timerIdx !== -1) {
                console.log('Found "Timer Section" at index', timerIdx);
                // Read context
                const context = content.substring(timerIdx - 20, timerIdx + 20);
                console.log('Context:', context);
            }
        }
    } else {
        console.log('Timer Section header not found. Appending it might be needed?');
    }

} catch (err) {
    console.error('Error fixing style.css:', err);
}
