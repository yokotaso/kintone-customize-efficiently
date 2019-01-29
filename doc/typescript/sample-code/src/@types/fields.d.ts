/**
 * This type definition is auto-generated.
 * If you update kintone form settings, Please regenerate this type definition
 */
declare namespace kintone.types {
  interface Fields {
    Record_number: {
      type: "RECORD_NUMBER";
      value: string;
      error?: string;
    };

    Text: {
      type: "SINGLE_LINE_TEXT";
      value: string;
      error?: string;
    };
  }

  interface SavedFields extends Fields {
    $id: {
      type: "__ID__";
      value: string;
    };
    $revision: {
      type: "__REVISION__";
      value: string;
    };

    Created_by: {
      type: "CREATOR";
      value: { code: string; name: string };
    };

    Updated_by: {
      type: "MODIFIER";
      value: { code: string; name: string };
    };

    Updated_datetime: {
      type: "UPDATED_TIME";
      value: string;
      error?: string;
    };

    Created_datetime: {
      type: "CREATED_TIME";
      value: string;
      error?: string;
    };
  }
}
