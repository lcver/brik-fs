import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Forms({ form, handleSubmit, handleChange, loading }) {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                    id="email"
                    placeholder="name@mail.com"
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                    id="password"
                    required
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <Button disabled={loading} onClick={handleSubmit}>
                {loading ? "loading . . ." : "Submit"}
            </Button>
        </form>
    );
}
