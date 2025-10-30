import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectCountryList from "./SelectCountryList";

type CommonProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
};

type InputFieldProps<T extends FieldValues> = CommonProps<T> & {
  inputType: "text" | "password" | "email";
  items?: null;
};

type SelectFieldProps<T extends FieldValues> = CommonProps<T> & {
  inputType: "select";
  items: string[];
};

type Props<T extends FieldValues> =
  | InputFieldProps<T>
  | SelectFieldProps<T>;

function FormFieldGeneration<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  inputType,
  items = [],
}: Props<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            {inputType === "select" ? (
              field.name === "country" ? (
                <SelectCountryList />
              ) : (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="select-trigger">
                    <SelectValue placeholder={`Select a ${name}`} />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 text-white">
                    <SelectGroup>
                      {items?.map((item, ind) => (
                        <SelectItem
                          key={`item-${ind}`}
                          value={item}
                          className="focus:bg-gray-600"
                        >
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )
            ) : (
              <Input
                placeholder={placeholder ?? `Enter your ${name}`}
                {...field}
                type={inputType}
                autoComplete={inputType === "password" ? "off" : "on"}
                className="form-input"
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormFieldGeneration;
