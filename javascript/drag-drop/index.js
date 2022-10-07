
const parr = document.querySelectorAll(".par")
const sect = document.querySelectorAll(".sec")

parr.forEach(p => {
    p.addEventListener('dragstart', event => {
        console.log('arrastrando');
        p.classList.add('addP')
        event.dataTransfer.setData("id", p.id)
        const ghost = document.querySelector(".ghost")
        event.dataTransfer.setDragImage(ghost, 0, 0)
    });
    p.addEventListener('dragend', () => {
        console.log('finalice');
        p.classList.remove('addP')
    });
})
sect.forEach(s => {

    s.addEventListener('dragover', event => {
        event.preventDefault()
        console.log('over');
        event.dataTransfer.dropEffect = 'copy'
    });
    s.addEventListener('drop', (event) => {
        console.log('drop');
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    });
})

const papelera = document.querySelector(".delete")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})