console.log("Starting the program");

const fecthData = async (callback) => {
    setTimeout(() => {
        const data = {
            Name: "Yagnik",
            college: "CSPIT",
            department: "CE"
        }
        callback(null, data);
    }, 5000)
}

function handleData(error, data) {
    if (error) {
        console.error("Error while fetching data:", error);
    } else {
        console.log("Fetched data:", data);
    }
}

fecthData(handleData);

console.log("Ending the program");

