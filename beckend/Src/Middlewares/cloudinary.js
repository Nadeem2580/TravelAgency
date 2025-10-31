import multer from "multer";
const storage = multer.diskStorage({
    destination: "./upload",
    filename: (req, file, callBacksFunc) => {
        // callBacksFunc(error(forcefully) :Boolean , fileName  )
        callBacksFunc(false, `${new Date().getTime()} - ${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

export default upload;
