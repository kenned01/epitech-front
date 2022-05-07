export const TransformData = (data = {}) => {

    let form_data = new FormData();

    Object
        .keys(data)
        .forEach(key => form_data.append(key, data[key]) )

    return form_data
}