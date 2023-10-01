import clsx from "clsx";

export default function Notification({ status, msg }) {
    if (status == "success") {
        return (
            <div className={clsx("bg-green-200", "p-3 mb-5 rounded-xl")}>
                <h3 className={clsx("text-green-800", "text-xl font-semibold")}>
                    {msg}
                </h3>
            </div>
        );
    }

    if (status == "error") {
        return (
            <div className={clsx("bg-red-200", "p-3 mb-5 rounded-xl")}>
                <h3 className={clsx("text-red-800", "text-xl font-semibold")}>
                    {msg}
                </h3>
            </div>
        );
    }
}
