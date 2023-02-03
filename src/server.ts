import { app } from "./app"
import { AppDataSource } from "./data-source"

(async () => {
    await AppDataSource.initialize()
    .catch((err : any) => {
        console.log("Error durign Data Source initialization", err)
    })

    app.listen(3000, () => {
        console.log("Server executing")
    })
})()