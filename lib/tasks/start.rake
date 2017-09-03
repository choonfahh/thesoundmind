namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec 'YARN_CONFIG_PRODUCTION=true yarn run postinstall && foreman start'
  end
end

desc 'Start development server'
task :start => 'start:development'
