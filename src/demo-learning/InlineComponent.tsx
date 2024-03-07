//inline component styling in jsx
// remember jsx is not css it is a little bit different and uses he JS naming convension so it is a little bit different
import styles from './inlineCss.module.css'
// const header = {color:'blue', fontSize:'120px'}
export const InlineComponent = () => {
    return (
        <>
            <div>
                {/* <h3 style={header}>
                    ILCom
                </h3> */}
                <h3 className={styles.header}>
                    IlCom
                </h3>
                    
            </div></>
    )

}