function convertFormData(_data: Object | any, data: FormData) {
    let keys = Object.keys(_data)
    let values = Object.values(_data)
    for (let i = 0; i < keys.length; i++) {
        let value = values[i] as any
        data.append(keys[i], value)
    }

    console.log(Object().a = 'b')
}