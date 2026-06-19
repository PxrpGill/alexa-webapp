import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import css from "./index.module.css";

export default function ModalForm() {
	return (
		<form className={css.root}>
			<div className={css.inputs}>
				<Input placeholder="Ваше имя" />
				<Input placeholder="Номер телефона" type="tel" />
			</div>
			<Button className={css.button} theme="transparent">
				Оставить заявку
			</Button>
		</form>
	);
}
