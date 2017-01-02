import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    // since a seperate stylesheet is only utilized for the production build,
    // need to add in the refernce to the <head> here
    $('head').prepend('<link rel="stylesheet" href="styles.css"');

    fs.writeFile('dis/index.html', $.html(), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });
});