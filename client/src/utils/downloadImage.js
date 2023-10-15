import FileSaver from 'file-saver'

export const downloadImage = async (url, str) => {

    FileSaver.saveAs(url, str)

}