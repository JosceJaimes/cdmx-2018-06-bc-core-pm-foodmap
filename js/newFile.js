window.load;
{
    fetch(url)
        .then(res => res.json)
        .then(data => {
            maps(data);
        });
}