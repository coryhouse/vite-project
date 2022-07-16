import styles from "./Button.module.scss";

type ButtonProps = {
  /** Button type */
  type: "button" | "submit";
};

export default function Button({ type }: ButtonProps) {
  return (
    <button className={styles.root} type={type}>
      Button
    </button>
  );
}
