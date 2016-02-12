(function() {
    function getIndentLength(str) {
        if (str) {
            return str.match(/^\s*/)[0].length;
        }
    }

    function setIndentLength (len) {
        return len > 0 ? new Array(len + 1).join(' ') : '';
    }

    function setupCodeBlockContents(element) {
        var pre = document.createElement('pre');
        element.innerHTML = '';
        element.classList.add('docs-code-block');
        element.appendChild(pre);
    }

    function trim (str) {
        return str ? str.replace(/^\s+/, '').replace(/\s+$/, '') : str;
    }

    function convertCodeBlock(element) {
        var oldElement;
        var html = element.innerHTML;
        var lang = element.getAttribute('lang');
        var lines = html.split('\n');
        var showLines = element.hasAttribute('lines') && element.getAttribute('lines') !== 'false';

        if (this.tagName === 'TEXTAREA') {
            oldElement = element;
            element = document.createElement('div');
        }

        // Trim leading empty lines.
        if (!trim(lines[0])) {
            lines.splice(0, 1);
        }

        // Trim trailing empty lines
        if (!trim(lines[lines.length - 1])) {
            lines.splice(lines.length - 1, 1);
        }

        var baseIndent = getIndentLength(lines[0]);

        setupCodeBlockContents(element);
        var pre = element.querySelector('pre');

        lines.forEach(function(line, index) {
            var indent = getIndentLength(line) - baseIndent;
            var num = document.createElement('code');
            var code = document.createElement('code');
            var newLine = document.createTextNode("\n");

            line = trim(line);
            line = line.replace(/&gt;/g, '>');
            line = line.replace(/&lt;/g, '<');

            num.className = 'docs-code-line-number';
            num.innerHTML = index + 1;
            code.className = 'docs-code-line-content';
            code.innerHTML = setIndentLength(indent) + hljs.highlight(lang || 'html', line).value;

            if (showLines) {
                pre.appendChild(num);
            }

            pre.appendChild(code);
            pre.appendChild(newLine);
        });

        if (oldElement) {
            oldElement.parentNode.replaceChild(element, oldElement);
        }
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var elements = document.querySelectorAll('.code');
        [].forEach.call(elements, function(element) {
            convertCodeBlock(element);
        })
    });
})();