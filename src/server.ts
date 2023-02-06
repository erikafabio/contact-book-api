import { app } from "./app"
import { AppDataSource } from "./data-source"

(async () => {
    await AppDataSource.initialize()
    .catch((err : any) => {
        console.log("Error durign Data Source initialization", err)
    })

    app.listen(4000, () => {
        console.log("Server executing on port 4000")
    })
})()