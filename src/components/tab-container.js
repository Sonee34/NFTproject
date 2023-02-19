import styles from "./tab-container.module.css";

const TabContainer = () => {
  return (
    <div className={styles.tabbar}>
      <div className={styles.tabbar1}>
        <div className={styles.bar}>
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
            <b className={styles.symbol3}>􀊫</b>
          </div>
          <div className={styles.home}>
            <div className={styles.sizeGuide}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.targetSize2x25ptX25pt}>
                <div className={styles.maxWidthOrHeight2x28pt} />
                <div className={styles.rectangle1} />
              </div>
            </div>
            <b className={styles.symbol}>{`􀉩 `}</b>
          </div>
        </div>
      </div>
      <div className={styles.mintedButton}>
        <img
          className={styles.mintedButtonChild}
          alt=""
          src="../polygon-3.svg"
        />
        <div className={styles.minted}>
          <div className={styles.sizeGuide}>
            <div className={styles.maxWidthOrHeight2x28pt} />
            <div className={styles.targetSize2x25ptX25pt}>
              <div className={styles.maxWidthOrHeight2x28pt} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <b className={styles.symbol}>􀅼</b>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
