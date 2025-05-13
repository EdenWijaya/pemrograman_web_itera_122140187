def includeme(config):
                """Add routes to the config."""
                config.add_static_view('static', 'static', cache_max_age=3600)
                
                # Default route
                config.add_route('home', '/')
                
                # Mata Kuliah routes dengan request_method untuk membedakan endpoint dengan URL yang sama
                config.add_route('matkul_list', '/matkul', request_method='GET')
                config.add_route('matkul_add', '/matkul', request_method='POST')
                config.add_route('matkul_update', '/matkul/{id}', request_method='PUT')
                config.add_route('matkul_delete', '/matkul/{id}', request_method='DELETE')
                