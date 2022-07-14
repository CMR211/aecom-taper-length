const SPEED_LIMIT = 45

const HTML_Element_InputSpeed = document.querySelector("#input-speed")
const HTML_Element_InputOffset = document.querySelector("#input-offset")
const HTML_Element_Output = document.querySelector("#output")
const HTML_Element_OutputShifting = document.querySelector("#output-shifting")
const HTML_Element_OutputShoulder = document.querySelector("#output-shoulder")

const data = {
    speed: 25,
    offset: 0,
    taper: 0,
}

HTML_Element_InputOffset.value = data.offset
HTML_Element_InputSpeed.value = data.speed

HTML_Element_InputSpeed.addEventListener("input", e => {
    const speed = e.target.value
    if (isNaN(speed)) return
    data.speed = speed
    calculateTaper()
})

HTML_Element_InputOffset.addEventListener("input", e => {
    const offset = e.target.value
    if (isNaN(offset)) return
    data.offset = offset
    calculateTaper()
})

function calculateTaper() {
    if (!data.speed || isNaN(data.speed)) return
    if (data.speed <= SPEED_LIMIT) {
        data.taper = Math.ceil((data.offset * data.speed ** 2) / 60)
    }
    if (data.speed > SPEED_LIMIT) {
        data.taper = data.offset * data.speed
    }
    HTML_Element_Output.textContent = data.taper
    HTML_Element_OutputShifting.textContent = Math.ceil(data.taper / 2)
    HTML_Element_OutputShoulder.textContent = Math.ceil(data.taper / 3)
}
