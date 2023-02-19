import TabContainer from "../components/tab-container";
import styles from "./components.module.css";

const Components = () => {
  return (
    <div className={styles.components}>
      <div className={styles.logos}>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <b className={styles.symbol}>􀎞</b>
        </div>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <div className={styles.symbol}>􀐿</div>
        </div>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <b className={styles.symbol2}>􀊫</b>
        </div>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <b className={styles.symbol}>􀅼</b>
        </div>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <div className={styles.symbol}>{`􀍡 `}</div>
        </div>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <b className={styles.symbol}>􀉩</b>
        </div>
        <div className={styles.home}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <div className={styles.symbol}>􀣋</div>
        </div>
      </div>
      <TabContainer />
    </div>
  );
};

export default Components;
