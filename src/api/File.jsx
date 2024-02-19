const BASE_URL = "http://localhost:8000/api/";

export const fileAPI = {

    sendFile: async function(file) {
        console.log(file);
        const formData = new FormData()
        formData.append("file_name", file.name.split(".")[0]);
        formData.append("file_location", file);

        try {
            const response = await fetch(BASE_URL + "upload-file/", {
                method: "post",
                body: formData
            });
            if (response.ok) {
                return response
            } else {
                throw new Error('Failed to upload file');
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};