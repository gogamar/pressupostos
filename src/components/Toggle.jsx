import { Field, Label, Switch } from "@headlessui/react";

export default function Toggle({ checked, onChange }) {
  return (
    <Field className="grid grid-cols-3 items-center">
      <Label as="span" className="mr-3 text-sm text-end">
        <span className="font-medium text-gray-900">Pagament mensual</span>
      </Label>
      <div className="flex justify-center">
        <Switch checked={checked} onChange={onChange} className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 data-[checked]:bg-green-600">
          <span aria-hidden="true" className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5" />
        </Switch>
      </div>
      <Label as="span" className="ml-3 text-sm text-start">
        <span className="font-medium text-gray-900">Pagament anual</span>
      </Label>
    </Field>
  );
}
