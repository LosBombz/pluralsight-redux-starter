import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, errors, saving}) => {
    return (
        <form>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                onChange={onChange}
                defaultOption="Select Author"
                options={allAuthors}
                error={errors.authorId}
            />
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}
            />

            <input
                type="submit"
                disabled={saving}
                value={saving ? "Saving..." : "Save"}
                className="btn btn-primary"
                onClick={onSave}
            />

        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;
