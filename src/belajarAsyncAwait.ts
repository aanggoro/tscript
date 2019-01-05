//return promise number
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(
        resolve => {
            setTimeout(()=>{
                resolve(count);
            }, milliseconds);
        });
}

async function dramaticWelcome():Promise<void> {
    console.log("hello");
    for (let i = 0; i<=5; i+=1){
        //number can be run until get data from delay function
        const count: number = await delay(500, i);
        console.log(count);
    }

    console.log("world");
}

dramaticWelcome();