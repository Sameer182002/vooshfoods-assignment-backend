const { app } = require("./server");


app.use("/user",require("./routes/userRoute"))
app.use('/task',require("./routes/taskRoute"))

module.exports = app