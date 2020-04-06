export const Endpoints = {
    Numbers: 'https://localhost:44357/api/PhoneNumber',
    Assignments: 'https://localhost:44357/api/PhoneAssignment'
}

export const Methods = {
    Get: 'GET',
    Post: 'POST'
}

export function GetFormData(body: object){
    var form_data = new FormData();
    const keys = Object.keys(body);
    const vals = Object.values(body);
    for ( var key in keys ) form_data.append(keys[key], vals[key]);
    return form_data;
}

export async function SupportToolsService(endpoint: string, method: string, body?: object, response: boolean = true ) {  
    let options = body ? { method: method, body: GetFormData(body) } : { method: method };
    if(response === false){
        fetch(endpoint, options);
        return null
    }

    let result = await fetch(endpoint, options)
	.then(response => response.json())
	.then(data => { if(data) { return data }});

    console.log(result);
	return result ? result : null;
};