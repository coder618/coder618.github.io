function ProductBanner(props) {
    const data = props.data;
    return (
        <div className="product-detail">
            <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
    );
}

export default ProductBanner;
