import { FormData } from "@narsil-ui/types";
import { useState } from "react";
import { route } from "ziggy-js";

function useFetchForm(contract: string) {
  const [form, setForm] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchForm() {
    if (form || loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(route("narsil.forms.fetch", { form: contract }), {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch form");
      }

      const data: FormData = await response.json();
      setForm(data);
    } catch (error) {
      console.error("Failed to fetch form:", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    loading,
    fetchForm,
  };
}

export default useFetchForm;
