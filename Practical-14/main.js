const first = () => {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                const data = { message: "Data fetched from first API" };
                resolve(data);
            } else {
                reject(new Error("Failed to fetch data from first API"));
            }
        }, 2000);
    });
};

const second = () => {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                const data = { message: "Data fetched from second API" };
                resolve(data);
            } else {
                reject(newError("Failed to fetch data from second API"));
            }
        }, 1500);
    });
};

const getData = async () => {
    try {
        const fdata = await first();
        console.log("API 1 data:", fdata);

        const sdata = await second();
        console.log("API 2 data:", sdata);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

getData();

