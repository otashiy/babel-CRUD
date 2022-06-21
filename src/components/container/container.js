
import "./container.scss";

const Container = ({ className, width="1100px", style, ...props }) => {
    return (
    <div className={`container ` + className} style={{maxWidth: width, ...style}} {...props}>
   
    </div>
    );
}

export default Container;