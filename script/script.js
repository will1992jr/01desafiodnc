const handleSubmit = (event) => {
    event.preventDefault();
    const name =  document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/pe5eUsfa3D4RoDDLegTgof', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json', 
    },
    body: JSON.stringify({ name, email }),
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);

function limparCampos() {
    setTimeout(function() {
    document.querySelector('input[name=nome]').value = "";
    document.querySelector('input[name=email]').value = "";
    }, 3000);