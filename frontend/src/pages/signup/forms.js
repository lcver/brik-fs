import { Button, Label, TextInput } from "flowbite-react";

export default function Forms({ form, loading, handleSubmit, handleChange }) {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="name" />
                </div>
                <TextInput
                    id="name"
                    required
                    shadow
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="email" />
                </div>
                <TextInput
                    id="email"
                    required
                    shadow
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="password" />
                </div>
                <TextInput
                    id="password"
                    required
                    shadow
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="confirmpassword" value="Confirm password" />
                </div>
                <TextInput
                    id="confirmpassword"
                    required
                    shadow
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <Button disabled={loading} onClick={handleSubmit}>
                {loading ? "loading . . ." : "Register new account"}
            </Button>
        </form>
    );
}
