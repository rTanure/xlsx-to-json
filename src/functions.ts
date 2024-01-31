import { read, utils } from "xlsx"
// import {jsonfile} from "jsonfile"

const toJson = (element: File | null) => {
  if(!element) return

  let workbook

  // console.log(element)

  const reader = new FileReader()

  reader.onload = (event) => {
    if(!event) return
    const data = event?.target?.result;

    console.log(data)
    workbook = read(data, { type: 'binary' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const dataSheets = utils.sheet_to_json(worksheet);

    console.log(dataSheets)
  }

  if (element) {
    reader.readAsBinaryString(element);
  } else {
    console.error("Nenhum arquivo selecionado");
  }
}

export {toJson}