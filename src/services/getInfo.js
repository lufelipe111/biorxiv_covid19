
const info = fetch('https://connect.biorxiv.org/relate/collection_json.php?grp=181')
    .then(res => res.json())
    .then((out) => {
        //console.log('Output: ', out);
        return out;
    })
    .catch(err => console.error(err));

export default info;