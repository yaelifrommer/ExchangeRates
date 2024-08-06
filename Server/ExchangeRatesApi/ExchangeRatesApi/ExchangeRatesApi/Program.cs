var builder = WebApplication.CreateBuilder(args);

// Configure Kestrel to listen on port 44372
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(44372);
});

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddHttpClient(); 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowAllOrigins");

app.MapControllers();

app.Run();
