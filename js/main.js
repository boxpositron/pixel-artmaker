const colors = [
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FF8A80',
    '#FF5252',
    '#FF1744',
    '#D50000',
    '#FCE4EC',
    '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
    '#FF80AB',
    '#FF4081',
    '#F50057',
    '#C51162',
    '#F3E5F5',
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC',
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C',
    '#EA80FC',
    '#E040FB',
    '#D500F9',
    '#AA00FF',
    '#EDE7F6',
    '#D1C4E9',
    '#B39DDB',
    '#9575CD',
    '#7E57C2',
    '#673AB7',
    '#5E35B1',
    '#512DA8',
    '#4527A0',
    '#311B92',
    '#B388FF',
    '#7C4DFF',
    '#651FFF',
    '#6200EA',
    '#E8EAF6',
    '#C5CAE9',
    '#9FA8DA',
    '#7986CB',
    '#5C6BC0',
    '#3F51B5',
    '#3949AB',
    '#303F9F',
    '#283593',
    '#1A237E',
    '#8C9EFF',
    '#536DFE',
    '#3D5AFE',
    '#304FFE',
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
    '#82B1FF',
    '#448AFF',
    '#2979FF',
    '#2962FF',
    '#E1F5FE',
    '#B3E5FC',
    '#81D4FA',
    '#4FC3F7',
    '#29B6F6',
    '#03A9F4',
    '#039BE5',
    '#0288D1',
    '#0277BD',
    '#01579B',
    '#80D8FF',
    '#40C4FF',
    '#00B0FF',
    '#0091EA',
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064',
    '#84FFFF',
    '#18FFFF',
    '#00E5FF',
    '#00B8D4',
    '#E0F2F1',
    '#B2DFDB',
    '#80CBC4',
    '#4DB6AC',
    '#26A69A',
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40',
    '#A7FFEB',
    '#64FFDA',
    '#1DE9B6',
    '#00BFA5',
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
    '#B9F6CA',
    '#69F0AE',
    '#00E676',
    '#00C853',
    '#F1F8E9',
    '#DCEDC8',
    '#C5E1A5',
    '#AED581',
    '#9CCC65',
    '#8BC34A',
    '#7CB342',
    '#689F38',
    '#558B2F',
    '#33691E',
    '#CCFF90',
    '#B2FF59',
    '#76FF03',
    '#64DD17',
    '#F9FBE7',
    '#F0F4C3',
    '#E6EE9C',
    '#DCE775',
    '#D4E157',
    '#CDDC39',
    '#C0CA33',
    '#AFB42B',
    '#9E9D24',
    '#827717',
    '#F4FF81',
    '#EEFF41',
    '#C6FF00',
    '#AEEA00',
    '#FFFDE7',
    '#FFF9C4',
    '#FFF59D',
    '#FFF176',
    '#FFEE58',
    '#FFEB3B',
    '#FDD835',
    '#FBC02D',
    '#F9A825',
    '#F57F17',
    '#FFFF8D',
    '#FFFF00',
    '#FFEA00',
    '#FFD600',
    '#FFF8E1',
    '#FFECB3',
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFC107',
    '#FFB300',
    '#FFA000',
    '#FF8F00',
    '#FF6F00',
    '#FFE57F',
    '#FFD740',
    '#FFC400',
    '#FFAB00',
    '#FFF3E0',
    '#FFE0B2',
    '#FFCC80',
    '#FFB74D',
    '#FFA726',
    '#FF9800',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100',
    '#FFD180',
    '#FFAB40',
    '#FF9100',
    '#FF6D00',
    '#FBE9E7',
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
    '#F4511E',
    '#E64A19',
    '#D84315',
    '#BF360C',
    '#FF9E80',
    '#FF6E40',
    '#FF3D00',
    '#DD2C00',
    '#EFEBE9',
    '#D7CCC8',
    '#BCAAA4',
    '#A1887F',
    '#8D6E63',
    '#795548',
    '#6D4C41',
    '#5D4037',
    '#4E342E',
    '#3E2723',
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#ECEFF1',
    '#CFD8DC',
    '#B0BEC5',
    '#90A4AE',
    '#78909C',
    '#607D8B',
    '#546E7A',
    '#455A64',
    '#37474F',
    '#263238',
    '#000000',
    '#FFFFFF'

]

const PIXEL_CACHE = '68A9C8CF253CCC1C'
const CACHE_DURATION = 1000 * 60 * 60 * 60 * 24

const state = {
    loaded: false
}
let tempColor = colors[colors.length - 1]
let config = {
    grid: 100,
    height: 100,
    width: 100,
    favorite:{
        colors: [],
        max: 4
    },
    zoom: {
        min: 50,
        max: 150,
        current: 100
    }
}


function throttle(callback, wait, context = this) {
    let timeout = null
    let callbackArgs = null

    const later = () => {
        callback.apply(context, callbackArgs)
        timeout = null
    }

    return function () {
        if (!timeout) {
            callbackArgs = arguments
            timeout = setTimeout(later, wait)
        }
    }
}

const debounce = (fn, time) => {
    let timeout;

    return function () {
        const functionCall = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

const loadState = () => {
    try {
        const pixelCache = JSON.parse(localStorage.getItem(PIXEL_CACHE))
        const pixelArea = document.getElementById('canvas')
        config = pixelCache.config

        for (let count = 0; count < config.grid; count++) {
            const pixel = document.createElement('div')
            pixel.classList.add('pixel')
            pixel.style.backgroundColor = pixelCache.colorState[count]
            pixel.style.height = `${config.height}px`
            pixel.style.width = `${config.width}px`

            pixel.addEventListener('click', paintPixel)

            pixelArea.appendChild(pixel)
        }

        state.loaded = true
    } catch (e) {
        state.loaded = false
        throw new Error(`Unable to load from cache :: ${e}`)

    }
}

const saveState = () => {
    const colorState = []
    const pixelArea = document.getElementById('canvas')
    const children = [...pixelArea.children]
    children.forEach(pixel => {
        colorState.push(pixel.style.backgroundColor)
    })
    localStorage.setItem(PIXEL_CACHE, JSON.stringify({
        config,
        colorState
    }))

    throttle(()=>{
        localStorage.removeItem(PIXEL_CACHE)
    }, CACHE_DURATION)()
}

const refreshFavorite = () => {
    const diff = config.favorite.max - config.favorite.colors.length
    
    for (let idx = 0; idx < diff; idx++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        config.favorite.colors.push(color)
    }

    const favoriteArea = document.getElementById('favorite')
    while (favoriteArea.firstChild) {
        favoriteArea.firstChild.remove()
    }

    config.favorite.colors.forEach(color => {

        const colorBox = document.createElement('li')
        colorBox.classList.add('pallette-color')
        colorBox.style.backgroundColor = color
        colorBox.addEventListener('click', copyColor)
        favoriteArea.appendChild(colorBox)
    })
}

const setFavorite = ()=>{
    if (config.favorite.colors.includes(tempColor)){
        return
    }

    if (config.favorite.colors.length >= config.favorite.max){
        config.favorite.colors.shift()
    }

    config.favorite.colors.push(tempColor)
    refreshFavorite()
}



const copyColor = e => {
    const color = e.target.style.backgroundColor
    tempColor = color
}

const generatePallette = colors => {

    if (typeof colors !== 'object') {
        return new Error('Unable to generate pallette')
    }

    const palletteArea = document.getElementById('pallette')

    colors.forEach(color => {

        const colorBox = document.createElement('li')
        colorBox.classList.add('pallette-color')
        colorBox.style.backgroundColor = color
        colorBox.addEventListener('click', copyColor)
        palletteArea.appendChild(colorBox)
    })
}

const paintPixel = e => {
    e.target.style.backgroundColor = tempColor
    setFavorite()
    throttle(() => {
        saveState()
    }, 5000)()
}

const updateZoom = () => {
    const pixelArea = document.getElementById('canvas')
    const zoomText = document.getElementById('zoomLevel')
    pixelArea.style.zoom = `${config.zoom.current}%`
    zoomText.innerText = pixelArea.style.zoom

}

const zoom = e => {

    config.zoom.current = e.target.value
    return updateZoom()
}

const generateGrid = () => {

    const pixelArea = document.getElementById('canvas')
    const gridButton = document.getElementById('gridUpdate')
    gridButton.disabled = true
    gridButton.style.cursor = 'wait'

    while (pixelArea.firstChild) {
        pixelArea.firstChild.remove()
    }

    for (let count = 0; count < config.grid; count++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style.backgroundColor = tempColor
        pixel.style.height = `${config.height}px`
        pixel.style.width = `${config.width}px`

        pixel.addEventListener('click', paintPixel)

        pixelArea.appendChild(pixel)
    }

    updateZoom()
    gridButton.disabled = false
    gridButton.style.cursor = 'pointer'

}

const updateGrid = () => {
    config.grid = document.getElementById('grid-size').value
    generateGrid()

}

const updateHeight = () => {
    config.height = document.getElementById('cell-height').value
    const pixelArea = document.getElementById('canvas')
    const children = [...pixelArea.children]
    children.forEach(pixel => {
        pixel.style.height = `${config.height}px`
    })
}

const updateWidth = () => {
    config.width = document.getElementById('cell-width').value
    const pixelArea = document.getElementById('canvas')
    const children = [...pixelArea.children]
    children.forEach(pixel => {
        pixel.style.width = `${config.width}px`
    })

}

const randomize = () => {
    const pixelArea = document.getElementById('canvas')
    const randomizeButton = document.getElementById('randomize')
    randomizeButton.disabled = true
    randomizeButton.style.cursor = 'wait'
    const children = [...pixelArea.children]
    children.forEach(pixel => {
        const color = colors[Math.floor(Math.random() * colors.length)]
        pixel.style.backgroundColor = color

    })

    randomizeButton.disabled = false
    randomizeButton.style.cursor = 'pointer'


}

const initButtons = () => {
    try {
        document.getElementById('gridUpdate').addEventListener('click', updateGrid)
        document.getElementById('heightUpdate').addEventListener('click', updateHeight)
        document.getElementById('widthUpdate').addEventListener('click', updateWidth)
        document.getElementById('zoom').addEventListener('input', zoom)
        document.getElementById('randomize').addEventListener('click', randomize)
        document.getElementById('save').addEventListener('click', saveState)



    } catch (error) {
        throw new Error('Unable to initialize application ::  Button Error')
    }
}

const loadDefaults = () => {
    document.getElementById('grid-size').value = config.grid
    document.getElementById('cell-height').value = config.height
    document.getElementById('cell-width').value = config.width
    document.getElementById('zoom').value = config.zoom.current
    document.getElementById('zoom').min = config.zoom.min
    document.getElementById('zoom').max = config.zoom.max


}

const init = () => {
    initButtons()
    try {
        loadState()        
    } catch (error) {
        generateGrid()
    }
    loadDefaults()
    generatePallette(colors)
    refreshFavorite()
}

try {
    init()
} catch (error) {
    // pass
}