/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth width of source image
 * @param {Number} srcHeight height of source image
 * @param {Number} maxWidth maximum available width
 * @param {Number} maxHeight maximum available height
 * @return {Object} { width, height }
 */
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
    return { width: srcWidth * ratio, height: srcHeight * ratio }
}

/**
 * Compress the image and render it to the target element
 * @param {File} file
 * @param {HTMLImageElement} target
 */
export function resizeImage(file, MAX_WIDTH = 100, MAX_HEIGHT = 100, callback = () => {}) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    const target = document.createElement('img')

    reader.onloadend = function (e) {
        let image = new Image()
        const canvas = document.createElement('canvas')

        image.onload = function () {
            // Calculate the aspect ratio of the image
            const { width, height } = calculateAspectRatioFit(
                image.width,
                image.height,
                MAX_WIDTH,
                MAX_HEIGHT
            )
            canvas.width = width
            canvas.height = height

            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0, width, height)

            // Resize the image to the desired size
            target.src = canvas.toDataURL('image/jpeg', 0.7)
        }
        callback(e.target.result)
    }
}
