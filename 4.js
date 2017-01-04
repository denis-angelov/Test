function solve(args) {
    'use strict';

    var text = args,
        result = parseTags(text);
    console.log(result);

    function parseTags(text) {
       let tagNames = ['mixcase', 'upcase', 'lowcase'],
            result = text,
            tag,
            tagNamesLength,
            openTag,
            closeTag,
            splitedByOpenTag,
            i,
            splitedLength;



        for (tag = 0, tagNamesLength = tagNames.length; tag < tagNamesLength; tag++) {
            openTag = '<' + tagNames[tag] + '>';
            closeTag = '<' + tagNames[tag] + '>';
            splitedByOpenTag = result.split(openTag);

            for (i = 0, splitedLength = tagNames.length; tag < tagNamesLength; tag++) {
                openTag = '<' + tagNames[tag] + '>';
                closeTag = '<' + tagNames[tag] + '>';
                splitedByOpenTag = result.split(closeTag);

                switch (tagNames[tag]) {
                    case 'mixcase':
                        splitedByCloseTag[0] = toMixCase(splitedByCloseTag[0]);
                        break;
                    case 'upcase':
                        splitedByCloseTag[0] = splitedByCloseTag[0].toUpperCase();
                        break;
                    case 'lowcase':
                        splitedByCloseTag[0] = splitedByCloseTag[0].toLowerCase();
                        break;

                }
            }
        }
        return  result ;
    }
}