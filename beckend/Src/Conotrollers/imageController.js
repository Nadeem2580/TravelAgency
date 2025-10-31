export const uploadImageContoller = async (req, res) => {
    try {
        const filePath = req.files[0].path;
        const imageResponse = await cloudinaryUplaoder.upload(filePath);

        // Remove Files
        fs.unlinkSync(filePath, (err, res) => {
            //
        });

        res.json({
            message: "image Uploaded",
            status: true,
            url: imageResponse.secure_url,
        });
    } catch (error) {
        res.json({
            message: error.message,
            status: false,
            data: null,
        });
    }
};
