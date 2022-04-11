import styles from './FormControl.module.css'


export const Element = (Component) => ({ input, meta, ...props }) => {
    const hasError = (meta.touched && meta.error)
    const activeField = meta.active

    return (
        <div className={
            `${styles.formControl} ${(activeField && !hasError ? styles.activeField : '')} ${(hasError ? styles.errorInput :'' )}`
        }>
            <Component  {...input} {...props} />
        </div>
    )
}