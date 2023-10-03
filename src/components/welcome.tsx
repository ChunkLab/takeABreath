export function Welcome({ setIsStart }) {
    function handleStart() {
        setIsStart((c) => !c);
    }
    return (
        <div className="flex flex-col justify-center items-center h-[600px]">
            <h1 className="text-xl mt-3 ">Ca fait plusieurs heures que vous n'avez pas pris le temps de respirer</h1>
            <button className="my-10 p-4 border-black border-[1px]" onClick={handleStart}>Commencer !</button>
        </div>
    );
}