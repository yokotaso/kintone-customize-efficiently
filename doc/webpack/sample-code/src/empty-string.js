import v8n from 'v8n';

export default v8n()
    .passesAnyOf(
        v8n().string().empty(),
        v8n().null(),
        v8n().undefined()
    );
    