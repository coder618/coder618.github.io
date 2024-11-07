export default function Technologies() {
    let items = [
        {
            title: "javascript",
            filename: "javascript-logo.png",
        },
        {
            title: "PHP",
            filename: "php-logo.png",
        },
        {
            title: "MySql",
            filename: "mysql-logo.png",
        },
        {
            title: "MongoDB",
            filename: "mongodb-logo.png",
        },
        {
            title: "Wordpress",
            filename: "wordpress-logo.png",
        },

        {
            title: "Laravel",
            filename: "laravel-logo.png",
        },
        {
            title: "Node.js",
            filename: "nodejs-logo.png",
        },
        {
            title: "React js",
            filename: "reactjs-logo.png",
        },
        {
            title: "html",
            filename: "html-logo.png",
        },
        {
            title: "scss",
            filename: "scss-logo.png",
        },
    ];

    return (
        <>
            <section className="technologies py-4">
                <div className="container ">
                    <h2 className="text-[35px] xl:text-[50px] font-bold leading-tight text-white text-shadow mb-[40px] xl:mb-[80px] text-center">
                        I have experience in following tech
                    </h2>

                    <div className="items grid grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-[30px] max-w-[1000px] mx-auto place-items-center  justify-center">
                        {items.map((item) => {
                            return (
                                <div className="item ">
                                    <img
                                        className="w-[150px] h-auto"
                                        src={`/logos/${item.filename}`}
                                        alt={item.title}
                                    />
                                    <p className="hidden title">{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
