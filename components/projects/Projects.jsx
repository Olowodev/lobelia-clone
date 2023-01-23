import styles from './projects.module.css'
import {BsArrowRight} from 'react-icons/bs'
import { isTemplateSpan } from 'typescript';
import Carousel from '../carousel/Carousel'

const Projects = () => {

    const items = ['one', 'two', 'three', 'four', 'five']

    const setting = {
        dragSpeed: 1.25,
        itemWidth: 300,
        itemHeight: 180,
        itemSideOffsets: 15
    }

    const itemStyle = {
        width: `${setting.itemWidth}px`,
        height: `${setting.itemHeight}px`,
        margin: `0px ${setting.itemSideOffsets}px`
    }
    return (
        <div>
            <div>
                <div>
                    <p>THESE ARE OUR PROJECTS</p>
                    <p>Explore the possibilities</p>
                </div>
                <Carousel _data={items} {...setting}>
                    {
                        items.map((i, _i) => (
                            <div
                            key={_i}
                            className={styles.item}
                            style={{ ...itemStyle}}>
                                <p>{i}</p>
                            </div>
                        ))
                    }
                </Carousel>
                <div>
                    <p>ALL CASE STUDIES</p>
                    <div>
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;