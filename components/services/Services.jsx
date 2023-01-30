import {BsArrowRight} from 'react-icons/bs'
import styles from './services.module.css'

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.servicesCont}>
                <div className={styles.servicesContent}>
                    <div className={styles.contentHead}>
                        <p>How to make informed decisions integrating physical climate risks</p>
                    </div>
                    <div className={styles.contentBody}>
                        <p>Lobelia is an international expert in the generation of precise and highly relevant observational datasets from geophysical features. Based on our exclusive and validated data of the Earth’s air, water, soil, and vegetation resources, Lobelia develops visualization tools and evidence-based analyses for decision-makers in the face of climate challenges.</p>
                    </div>
                    <div className={styles.contentButton}>
                        <p>WHAT WE DO</p>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div>
                    <video></video>
                </div>
            </div>
        </div>
    );
}

export default Services;