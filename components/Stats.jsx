export default function Stats() {
    return (
        <>
            <div className="max-w-[1100px] mx-auto mt-[60px] xl:mt-[100px] px-4">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 justify-center items-start text-center">
                    <div className="max-w-[200px]">
                        <div className="text-[40px] font-bold">7+</div>
                        <div className="text-md">Year of experience</div>
                    </div>

                    <div className="max-w-[200px]">
                        <div className="text-[40px] font-bold">2</div>
                        <div className="text-md">Company Worked with</div>
                    </div>

                    <div className="max-w-[200px]">
                        <div className="text-[40px] font-bold">17+</div>
                        <div className="text-md">Total Project</div>
                    </div>

                    <div className="max-w-[200px]">
                        <div className="text-[40px] font-bold">3+</div>
                        <div className="text-md">Year of Remote working Experience</div>
                    </div>
                </div>
            </div>
        </>
    );
}
