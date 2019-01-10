<OutlinedInput
    id={input.name}
    className={classNames(classes.margin, classes.textField)}
    variant="outlined"
    type={this.state.showPassword ? 'text' : 'password'}
    value={this.state.password}
    onChange={this.handleChange('password')}
    labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
    endAdornment: {
        <InputAdornment position="end">
            <IconButton
                onClick={this.handleClickShowPassword}
            >
                {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
        </InputAdornment>
    }

    {...input}/>

