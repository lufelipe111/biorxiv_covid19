// const infoPromise = () => fetch('https://connect.biorxiv.org/relate/collection_json.php?grp=181')
//     .then(res => res.json())
//     .then((out) => {
//         console.log('Output: ', out);
//         const formattedOut = out.rels; // [{}]
//         return formattedOut;
//     })
//     .catch(err => console.error(err));

/**
 * [
 *   rel_abs
 *   rel_title
 *   rel_authors [ author_name ]
 *   rel_link
 *   rel_date
 * ]
 */

const getAuthorsName = (author) => author.author_name;

const formatOutput = (rel) => {
    return {
        abs: rel.rel_abs,
        title: rel.rel_title,
        authors: rel.rel_authors.map(getAuthorsName),
        link: rel.rel_link,
        date: rel.rel_date,
    }
}

const getInfo = async () => {
    const res = await fetch('https://connect.biorxiv.org/relate/collection_json.php?grp=181');
    const out = await res.json();
    console.log(out.rels);
    const formatted = out.rels.map(formatOutput);
    console.log(formatted);
    return formatted;
};

export default getInfo;