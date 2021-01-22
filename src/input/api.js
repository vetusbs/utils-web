

export default function shuffle(path, onOk) {
    fetch('https://api-utils.herokuapp.com'+ path, {
        headers: new Headers({'Accept' : 'text/plain'})
    })
    .then(res => res.text())
    .then((data) => {
      onOk(data)
    })
    .catch(console.log);
}